import { create } from "zustand";
import { ReportInformationType } from "../types/reports";

export type ReportState = {
    reports: ReportInformationType[]
}

export type ReportActions = {
    searchReport: (reportNo: string) => ReportInformationType
}

export type ReportStoreType = ReportState & ReportActions

export const useReportStore = create<ReportStoreType>((set, get) => ({
    reports: [
        {
            name: "Road Damage / Potholes",
            location: "BLK 12, Barangay San Isidro",
            reportNo: "REP-2025-00981",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Issues being reviewed", description: "City desk is validating.", tag: "processing" },
                { status: "Dispatching help", description: "Maintenance team is on the way.", tag: "in-progress" },
                { status: "Help arrived", description: "Team has reached the location.", tag: "in-progress" },
                { status: "Solving the issue", description: "Work is in progress", tag: "in-progress" },
                { status: "Issue solved.", description: "The issue has been solved", tag: "completed" },
            ],
            reportedBy: "You",
            category: "Roads",
            priorityLevel: "Medium",
            timeSubmitted: "5 hrs ago",
        },
        {
            name: "Street Light Not Working",
            location: "BLK 4, Barangay Santo Niño",
            reportNo: "REP-2025-00982",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Dispatched electrician", description: "A technician is assigned.", tag: "in-progress" },
                { status: "Issue solved.", description: "Street light repaired.", tag: "completed" },
            ],
            reportedBy: "You",
            category: "Utilities",
            priorityLevel: "Low",
            timeSubmitted: "2 hrs ago",
        },
        {
            name: "Garbage Collection Delay",
            location: "BLK 7, Barangay Mabini",
            reportNo: "REP-2025-00983",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Dispatching help", description: "Truck scheduled for pickup.", tag: "in-progress" },
            ],
            reportedBy: "You",
            category: "Waste Management",
            priorityLevel: "High",
            timeSubmitted: "1 hr ago",
        },
        {
            name: "Flooded Street",
            location: "Zone 3, Barangay Malinis",
            reportNo: "REP-2025-00984",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Dispatching help", description: "Rescue team on the way.", tag: "in-progress" },
            ],
            reportedBy: "You",
            category: "Drainage",
            priorityLevel: "High",
            timeSubmitted: "30 mins ago",
        },
        {
            name: "Broken Traffic Light",
            location: "Crossing Main Ave. and Park St.",
            reportNo: "REP-2025-00985",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Validation ongoing", description: "City traffic unit checking the issue.", tag: "processing" },
            ],
            reportedBy: "You",
            category: "Traffic",
            priorityLevel: "Medium",
            timeSubmitted: "7 hrs ago",
        },
        {
            name: "Illegal Dumping of Waste",
            location: "BLK 9, Barangay Poblacion",
            reportNo: "REP-2025-00986",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "On-site inspection", description: "City inspector dispatched.", tag: "in-progress" },
                { status: "Issue solved.", description: "Waste has been removed.", tag: "completed" },
            ],
            reportedBy: "You",
            category: "Sanitation",
            priorityLevel: "Low",
            timeSubmitted: "1 day ago",
        },
        {
            name: "Clogged Drainage",
            location: "BLK 2, Barangay San Roque",
            reportNo: "REP-2025-00987",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Maintenance assigned", description: "Drainage cleaning in progress.", tag: "in-progress" },
            ],
            reportedBy: "You",
            category: "Drainage",
            priorityLevel: "Medium",
            timeSubmitted: "6 hrs ago",
        },
        {
            name: "Noise Complaint - Construction",
            location: "Phase 1, Barangay Bagong Silang",
            reportNo: "REP-2025-00988",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Inspection scheduled", description: "Barangay will inspect site.", tag: "processing" },
            ],
            reportedBy: "You",
            category: "Public Disturbance",
            priorityLevel: "Low",
            timeSubmitted: "8 hrs ago",
        },
        {
            name: "Water Supply Interruption",
            location: "BLK 5, Barangay Santo Tomas",
            reportNo: "REP-2025-00989",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Utility check", description: "Water district investigating.", tag: "in-progress" },
                { status: "Issue solved.", description: "Water supply restored.", tag: "completed" },
            ],
            reportedBy: "You",
            category: "Utilities",
            priorityLevel: "High",
            timeSubmitted: "3 hrs ago",
        },
        {
            name: "Graffiti on Public Property",
            location: "Barangay San Pedro, Wall near City Hall",
            reportNo: "REP-2025-00990",
            reportStatus: [
                { status: "Reported", description: "Your report has been received.", tag: "processing" },
                { status: "Dispatching cleanup crew", description: "Maintenance team assigned.", tag: "in-progress" },
                { status: "Issue solved.", description: "Area has been cleaned.", tag: "completed" },
            ],
            reportedBy: "You",
            category: "Public Property",
            priorityLevel: "Low",
            timeSubmitted: "10 hrs ago",
        },
    ],

    searchReport: (reportNo) => {
        const reports = get().reports
        return reports.filter(report => report.reportNo == reportNo)[0] ?? {}
    }
}))