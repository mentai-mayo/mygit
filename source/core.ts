
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

namespace git{

  // calc sha1 digest
  export function sha1(target: string): string{
    return crypto.createHash('sha1').update(target).digest('hex');
  };

  // read file
  function read(target: string): string | null{
    if(!fs.existsSync(target)) return null;
    try{
      return fs.readFileSync(target, {encoding: 'utf-8'});
    } catch{
      return null;
    }
  }

  // write file
  function write(target: string, content: string, overwrite: boolean = false): boolean{
    if(!overwrite && fs.existsSync(target)) return false;
    if(!fs.existsSync(path.win32.dirname(target))) fs.mkdirSync(path.win32.dirname(target), {recursive: true});
    try{
      fs.writeFileSync(target, content);
    } catch{
      return false;
    }
    return true;
  }

  // copy file
  function copy(target: string, distance: string, callback: (content: string)=>string = (target: string)=>target, overwrite: boolean = false): string | true{
    return true;
  }

  // git 
};

export default git;
