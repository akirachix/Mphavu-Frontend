
export const toCamelCase = (str: string): string => {
    return str.toLowerCase().replace(/([-_][a-z])/g, group =>
      group.toUpperCase().replace('-', '').replace('_', '')
    );
  };
  
  export const keysToCamelCase = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(v => keysToCamelCase(v));
    } else if (obj !== null && obj.constructor === Object) {
      return Object.keys(obj).reduce((result, key) => {
        result[toCamelCase(key)] = keysToCamelCase(obj[key]);
        return result;
      }, {} as {[key: string]: any});
    }
    return obj;
  };
  
  export const formatPercentage = (value: number | string): number => {
    return typeof value === 'number' ? Math.round(value) : 0;
  };
  
  export const ensureRequiredStats = (stats: {[key: string]: any}): {[key: string]: number} => {
    const requiredStats = [
      'shootingAccuracy',
      'shootingAngle',
      'assists',
      'ballControl',
      'scores',
      'actionCompletion',
      'passingGame'
    ];
  
    return requiredStats.reduce((acc, stat) => {
      acc[stat] = formatPercentage(stats[stat] || 0);
      return acc;
    }, {} as {[key: string]: number});
  };