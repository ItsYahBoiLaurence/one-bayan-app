export type ReportInformationType = {
    name: string
    location: string
    reportNo: string
    reportedBy: string
    category: string
    priorityLevel: string
    timeSubmitted: string
    reportStatus: ReportStatusType[]
}

export type ReportStatusType = {
    status: string
    description: string
    tag: string
}