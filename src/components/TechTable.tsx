export default function TechTable({ data }: { data: Record<string,string> }) {
  const entries = Object.entries(data);
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {entries.map(([k,v])=> (
        <div key={k} className="border rounded p-3">
          <dt className="text-sm text-slate-500">{k}</dt>
          <dd className="font-medium">{v}</dd>
        </div>
      )
      )}
      <div className="overflow-x-auto -mx-4 md:mx-0">
  <table className="min-w-full text-sm md:text-base">
    ...
  </table>
</div>

    </dl>
    
  )
}
