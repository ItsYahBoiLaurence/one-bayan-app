import { StatusColorType } from "@/app/(tabs)/account/reports/[reportId]";
import { colors } from "../styles/colors";

const statusColor: StatusColorType = {
    "in-progress": colors.yellow,
    processing: colors.gray,
    completed: "green",
    invalid: colors.royalBlue,
};

export function getColor(v: string) {
    return statusColor[v as keyof StatusColorType]
}