import { Point } from '../src/point';
import { Range } from '../src/range';
import { ITextEditor } from '../src/text-editor';
import { expect } from 'chai';

/**
 * @test {ITextEditor}
 */
describe('ITextEditor', () => {
  /**
   * @test {ITextEditor#getCursorPosition}
   */
  describe('#getCursorPosition()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.getCursorPosition();
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#setCursorPosition}
   */
  describe('#setCursorPosition(pos)', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      const pos = new Point(0, 0);
      expect(() => {
        textEditor.setCursorPosition(pos);
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#setSelectionRange}
   */
  describe('#setSelectionRange()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      const range = new Range(new Point(0, 0), new Point(0, 1));
      expect(() => {
        textEditor.setSelectionRange(range);
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#getLastRow}
   */
  describe('#getLastRow()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.getLastRow();
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#acceptsTableEdit}
   */
  describe('#acceptsTableEdit()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.acceptsTableEdit(0);
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#getLine}
   */
  describe('#getLine()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.getLine(0);
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#insertLine}
   */
  describe('#insertLine()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.insertLine(0, 'foobar');
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#deleteLine}
   */
  describe('#deleteLine()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.deleteLine(0);
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#replaceLines}
   */
  describe('#replaceLines()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      const lines = ['foo', 'bar'];
      expect(() => {
        textEditor.replaceLines(0, 1, lines);
      }).to.throw(Error, /not implemented/i);
    });
  });

  /**
   * @test {ITextEditor#transact}
   */
  describe('#transact()', () => {
    it('should be not implemented, throw an error', () => {
      const textEditor = new ITextEditor();
      expect(() => {
        textEditor.transact(() => {});
      }).to.throw(Error, /not implemented/i);
    });
  });
});
