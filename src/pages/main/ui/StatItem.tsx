export default function StatItem({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="md:text-2xl font-semibold text-white">{value}</span>
      <span className="mt-1 text-sm text-gray-400">{label}</span>
    </div>
  )
}
