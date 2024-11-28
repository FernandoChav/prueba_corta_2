

import { Status } from "./Status";

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location ;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}