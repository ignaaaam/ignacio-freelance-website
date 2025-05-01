declare module 'resend' {
  export class Resend {
    constructor(apiKey: string);
    
    emails: {
      send(options: {
        from: string;
        to: string | string[];
        subject: string;
        html?: string;
        text?: string;
        reply_to?: string;
        cc?: string | string[];
        bcc?: string | string[];
        attachments?: any[];
      }): Promise<{ 
        data?: any; 
        error?: any;
      }>;
    };
  }
} 