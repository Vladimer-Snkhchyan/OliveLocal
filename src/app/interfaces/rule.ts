export enum Module {
    Onboarding = 'Onboarding',
    Leaves = 'Leaves',
    Attendance = 'Attendance'
};
export enum Country {
    UnitedStates = 'United States of America',
    SaudiArabia = 'Saudi Arabia',
    Armenia = 'Armenia',
    Canada = 'Canada',
    UnitedKingdom = 'United Kingdom',
    Australia = 'Australia',
    Germany = 'Germany',
    France = 'France',
    India = 'India',
    China = 'China',
    Japan = 'Japan',
    Brazil = 'Brazil',
    SouthAfrica = 'South Africa',
    Mexico = 'Mexico',
    Russia = 'Russia',
    Italy = 'Italy',
    Spain = 'Spain',
    Netherlands = 'Netherlands',
    Sweden = 'Sweden',
    Norway = 'Norway',
    SouthKorea = 'South Korea',
    NewZealand = 'New Zealand',
  };

export enum Status {
    Active = 'Active',
    Inactive = 'Inactive',
    Draft = 'Draft',
    Ready = 'Ready',

}

export interface Rule {
    id: number;
    rule_name: string;
    module: Module;
    country: Country;
    status: Status;
}
