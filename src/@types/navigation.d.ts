export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        type: 'GREEN' | 'RED';
        percent: number;
        meals: Meal[];
      };
      new: undefined;
      added: undefined;
      
    }
  }
}