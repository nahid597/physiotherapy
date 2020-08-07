export class PostUserData {
    public FirstName: string;
    public LastName: string;
    public EmailName: string;
    public PasswortName: string;
    public ConfirmPasswortName: string;
  
    constructor(options: any = {}) {
      this.FirstName = options.FirstName;
      this.LastName = options.LastName;
      this.EmailName = options.EmailName;
      this.PasswortName = options.PasswortName;
      this.ConfirmPasswortName = options.ConfirmPasswortName;
    }
  }