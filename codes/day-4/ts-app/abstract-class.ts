abstract class Reader {
    constructor(public filePath: string) {

    }
    public abstract read(): string;
    public show(): void {

    }
}

class FileReaderCls extends Reader {
    public read(): string {
        return 'data'
    }
}