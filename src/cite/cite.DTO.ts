export class CiteDTO {
    readonly id_cite: number;
    readonly id_patient: string;
    readonly id_doctor: string;
    readonly date: Date;
    readonly observations: string;
    readonly status: string;
}