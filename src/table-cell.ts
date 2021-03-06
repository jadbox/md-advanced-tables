import { Alignment } from './alignment';

/**
 * A `TableCell` object represents a table cell.
 *
 * @private
 */
export class TableCell {
  /**
   * Raw content of the cell.
   */
  public readonly rawContent: string;

  /**
   * Trimmed content of the cell.
   */
  public readonly content: string;

  /**
   * Width of the left padding of the cell.
   */
  public readonly paddingLeft: number;

  /**
   * Width of the right padding of the cell.
   */
  public readonly paddingRight: number;

  /**
   * Creates a new `TableCell` object.
   *
   * @param rawContent - Raw content of the cell.
   */
  constructor(rawContent: string) {
    this.rawContent = rawContent;
    this.content = rawContent.trim();
    this.paddingLeft =
      this.content === ''
        ? this.rawContent === ''
          ? 0
          : 1
        : this.rawContent.length - this.rawContent.trimLeft().length;
    this.paddingRight =
      this.rawContent.length - this.content.length - this.paddingLeft;
  }

  /**
   * Convers the cell to a text representation.
   *
   * @returns The raw content of the cell.
   */
  public toText(): string {
    return this.rawContent;
  }

  /**
   * Checks if the cell is a delimiter i.e. it only contains hyphens `-` with optional one
   * leading and trailing colons `:`.
   *
   * @returns `true` if the cell is a delimiter.
   */
  public isDelimiter(): boolean {
    return /^\s*:?-+:?\s*$/.test(this.rawContent);
  }

  /**
   * Returns the alignment the cell represents.
   *
   * @returns The alignment the cell represents; `undefined` if the cell is not a delimiter.
   */
  public getAlignment(): Alignment | undefined {
    if (!this.isDelimiter()) {
      return undefined;
    }
    if (this.content[0] === ':') {
      if (this.content[this.content.length - 1] === ':') {
        return Alignment.CENTER;
      }
      return Alignment.LEFT;
    }
    if (this.content[this.content.length - 1] === ':') {
      return Alignment.RIGHT;
    }
    return Alignment.NONE;
  }

  /**
   * Computes a relative position in the trimmed content from that in the raw content.
   *
   * @param rawOffset - Relative position in the raw content.
   * @returns - Relative position in the trimmed content.
   */
  public computeContentOffset(rawOffset: number): number {
    if (this.content === '') {
      return 0;
    }
    if (rawOffset < this.paddingLeft) {
      return 0;
    }
    if (rawOffset < this.paddingLeft + this.content.length) {
      return rawOffset - this.paddingLeft;
    }
    return this.content.length;
  }

  /**
   * Computes a relative position in the raw content from that in the trimmed content.
   *
   * @param contentOffset - Relative position in the trimmed content.
   * @returns - Relative position in the raw content.
   */
  public computeRawOffset(contentOffset: number): number {
    return contentOffset + this.paddingLeft;
  }
}
