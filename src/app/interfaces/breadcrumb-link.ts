export enum BreadcrumbLinkType {
    start =  'start', //the start
    middle = 'inter', // inter
    current = 'current', //current

}

export interface BreadcrumbLink {
    route: string;
    route_label: string;
    route_type: BreadcrumbLinkType;
}
