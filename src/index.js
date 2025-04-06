export function toSnakeCase(str) {
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/\s+/g, '_')                   
      .toLowerCase();
  }

export function toKebabCase(str){
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')                   
      .toLowerCase();
  }
