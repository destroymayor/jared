'use client';

import NumberTicker from '@/components/ui/number-ticker';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { Line, LineChart as LineChartRecharts } from 'recharts';

const chartConfig = {
    value: {
        label: 'value',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

type StatisticsChartProps = {
    loading: boolean;
    title: string;
    icon: React.ReactNode;
    data?: Array<{
        value: number;
    }>;
    total: number;
    change: number;
};

const LineChart = (props: StatisticsChartProps) => {
    const { loading, title, icon, data, total, change } = props;

    return (
        <Card className="bg-zine-100 gap-0 border-none dark:bg-zinc-900">
            <CardHeader>
                <CardTitle className="text-sm dark:text-zinc-400">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-[30px] w-1/3 rounded-md bg-zinc-300 dark:bg-zinc-800" />
                        <Skeleton className="h-[16px] w-1/2 rounded-md bg-zinc-300 dark:bg-zinc-800" />
                    </div>
                ) : (
                    <>
                        <div className="flex items-center gap-2">
                            <span>{icon}</span>
                            <NumberTicker
                                className="h-[30px] text-2xl font-bold"
                                value={total}
                            />
                        </div>
                        <p className="pt-1 text-xs dark:text-zinc-400">
                            +{change.toFixed(1)}% from last month
                        </p>
                    </>
                )}

                {loading ? (
                    <Skeleton className="mt-1 h-[96px] w-full rounded-md bg-zinc-300 dark:bg-zinc-800" />
                ) : (
                    <ChartContainer config={chartConfig} className="h-[100px] w-full">
                        <LineChartRecharts
                            data={data}
                            margin={{
                                top: 10,
                                right: 10,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <Line
                                type="monotone"
                                strokeWidth={2}
                                dataKey="value"
                                stroke="var(--color-value)"
                                fill="var(--color-value)"
                                activeDot={{
                                    r: 6,
                                }}
                            />
                        </LineChartRecharts>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    );
};

export default LineChart;
