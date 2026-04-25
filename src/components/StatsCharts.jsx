import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

export default function StatsCharts({ boys, girls, total, dark }) {
  const textColor = dark ? '#CBD5E1' : '#1E293B'
  const gridColor = dark ? 'rgba(148,163,184,0.12)' : 'rgba(15,23,42,0.07)'
  const boysPercent = Math.round((boys / total) * 100)
  const girlsPercent = 100 - boysPercent

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Donut Chart */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-100/60 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/60">
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-2xl" />
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Gender Ratio</h4>
              <p className="mt-0.5 text-lg font-bold text-slate-800 dark:text-white">Boys vs Girls</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg shadow-lg shadow-blue-500/30">
              🎯
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative h-48 w-48 flex-shrink-0">
              <Doughnut
                data={{
                  labels: [`Boys ${boysPercent}%`, `Girls ${girlsPercent}%`],
                  datasets: [
                    {
                      data: [boys, girls],
                      backgroundColor: ['#3B82F6', '#EC4899'],
                      hoverBackgroundColor: ['#2563EB', '#DB2777'],
                      borderColor: dark ? '#1e293b' : '#ffffff',
                      borderWidth: 3,
                      hoverOffset: 8,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  cutout: '72%',
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      backgroundColor: dark ? '#1e293b' : '#fff',
                      titleColor: dark ? '#e2e8f0' : '#1e293b',
                      bodyColor: dark ? '#94a3b8' : '#64748b',
                      borderColor: dark ? '#334155' : '#e2e8f0',
                      borderWidth: 1,
                      cornerRadius: 12,
                      padding: 12,
                    },
                  },
                }}
              />
              {/* Center label */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black text-slate-800 dark:text-white">{total}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Total</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="text-slate-600 dark:text-slate-300">Boys</span>
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">{boysPercent}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-blue-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000"
                    style={{ width: `${boysPercent}%` }}
                  />
                </div>
                <p className="mt-1 text-right text-[10px] font-semibold text-slate-400">{boys} students</p>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-pink-500" />
                    <span className="text-slate-600 dark:text-slate-300">Girls</span>
                  </span>
                  <span className="text-pink-500 dark:text-pink-400">{girlsPercent}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-pink-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-1000"
                    style={{ width: `${girlsPercent}%` }}
                  />
                </div>
                <p className="mt-1 text-right text-[10px] font-semibold text-slate-400">{girls} students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-100/60 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/60">
        <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-2xl" />
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Enrollment Overview</h4>
              <p className="mt-0.5 text-lg font-bold text-slate-800 dark:text-white">Students Breakdown</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg shadow-lg shadow-emerald-500/30">
              📊
            </div>
          </div>
          <div className="h-52">
            <Bar
              data={{
                labels: ['Boys', 'Girls', 'Total'],
                datasets: [
                  {
                    label: 'Count',
                    data: [boys, girls, total],
                    backgroundColor: [
                      'rgba(59, 130, 246, 0.85)',
                      'rgba(236, 72, 153, 0.85)',
                      'rgba(16, 185, 129, 0.85)',
                    ],
                    hoverBackgroundColor: ['#2563EB', '#DB2777', '#059669'],
                    borderRadius: 12,
                    borderSkipped: false,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: dark ? '#1e293b' : '#fff',
                    titleColor: dark ? '#e2e8f0' : '#1e293b',
                    bodyColor: dark ? '#94a3b8' : '#64748b',
                    borderColor: dark ? '#334155' : '#e2e8f0',
                    borderWidth: 1,
                    cornerRadius: 12,
                    padding: 12,
                  },
                },
                scales: {
                  x: {
                    ticks: { color: textColor, font: { weight: 'bold', size: 12 } },
                    grid: { display: false },
                    border: { display: false },
                  },
                  y: {
                    ticks: { color: textColor, stepSize: 50 },
                    grid: { color: gridColor },
                    border: { display: false },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
