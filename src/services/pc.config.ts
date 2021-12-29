
export class PCconfig {
   private static path = 'https://sheltered-earth-25128.herokuapp.com';
//    private static path = 'http://localhost:3000';
    public static getPath(): string {
        return PCconfig.path;
    }
}