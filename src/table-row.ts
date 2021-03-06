import { TableCell } from './table-cell';

/**
 * A `TableRow` object represents a table row.
 *
 * @private
 */
export class TableRow {
  /**
   * Margin string at the left of the row.
   */
  public readonly marginLeft: string;

  /**
   * Margin string at the right of the row.
   */
  public readonly marginRight: string;

  private readonly _cells: TableCell[];

  /**
   * Creates a new `TableRow` objec.
   *
   * @param cells - Cells that the row contains.
   * @param marginLeft - Margin string at the left of the row.
   * @param marginRight - Margin string at the right of the row.
   */
  constructor(cells: TableCell[], marginLeft: string, marginRight: string) {
    this._cells = cells.slice();
    this.marginLeft = marginLeft;
    this.marginRight = marginRight;
  }

  /**
   * Gets the number of the cells in the row.
   */
  public getWidth(): number {
    return this._cells.length;
  }

  /**
   * Returns the cells that the row contains.
   */
  public getCells(): TableCell[] {
    return this._cells.slice();
  }

  /**
   * Gets a cell at the specified index.
   *
   * @param index - Index.
   * @returns The cell at the specified index if exists; `undefined` if no cell is found.
   */
  public getCellAt(index: number): TableCell | undefined {
    return this._cells[index];
  }

  /**
   * Sets a cell in the row to a new value, returning a copy of the row
   * with the modified value.
   *
   * If an invalid index is provided, the row will be unchanged.
   */
  public setCellAt(index: number, value: string): TableRow {
    const cells = this.getCells(); // a copy
    cells[index] = new TableCell(value);
    return new TableRow(cells, this.marginLeft, this.marginRight);
  }

  /**
   * Convers the row to a text representation.
   */
  public toText(): string {
    if (this._cells.length === 0) {
      return this.marginLeft;
    }
    const cells = this._cells.map((cell) => cell.toText()).join('|');
    return `${this.marginLeft}|${cells}|${this.marginRight}`;
  }

  /**
   * Checks if the row is a delimiter or not.
   *
   * @returns `true` if the row is a delimiter i.e. all the cells contained are delimiters.
   */
  public isDelimiter(): boolean {
    return this._cells.every((cell) => cell.isDelimiter());
  }
}
