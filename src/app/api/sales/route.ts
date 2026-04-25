import { NextResponse } from "next/server";
export async function GET() {
    const data = [
        { month: 'Jan', 2022: 4500, 2023: 5200, 2024: 6100 },
        { month: 'Feb', 2022: 3800, 2023: 4100, 2024: 5900 },
        { month: 'Mar', 2022: 5200, 2023: 5800, 2024: 7200 },
        { month: 'Apr', 2022: 4100, 2023: 4900, 2024: 6500 },
        { month: 'May', 2022: 4800, 2023: 5500, 2024: 8100 },
    ];
    return NextResponse.json(data);
}