import { createClient } from '@/utils/supabase/server'

export default async function SupabaseExample() {
    const supabase = await createClient()

    // Example: Fetch data from a Supabase table
    // Replace 'todos' with your actual table name
    const { data: todos, error } = await supabase.from('todos').select()

    if (error) {
        console.error('Error fetching data:', error)
    }

    return (
        <div className="min-h-screen bg-stone-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Supabase Integration Example</h1>

                {error ? (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                        <p className="font-semibold">Error:</p>
                        <p>{error.message}</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Data from Supabase:</h2>
                        {todos && todos.length > 0 ? (
                            <ul className="space-y-2">
                                {todos.map((todo, index) => (
                                    <li key={index} className="border-b border-stone-200 pb-2">
                                        {JSON.stringify(todo)}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-stone-600">No data found. Make sure you have a 'todos' table in your Supabase database.</p>
                        )}
                    </div>
                )}

                <div className="mt-8 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded">
                    <p className="font-semibold mb-2">Next Steps:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Create tables in your Supabase database</li>
                        <li>Update this example to use your actual table names</li>
                        <li>Use <code className="bg-blue-100 px-1 rounded">createClient()</code> from <code className="bg-blue-100 px-1 rounded">@/utils/supabase/server</code> in Server Components</li>
                        <li>Use <code className="bg-blue-100 px-1 rounded">createClient()</code> from <code className="bg-blue-100 px-1 rounded">@/utils/supabase/client</code> in Client Components</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
