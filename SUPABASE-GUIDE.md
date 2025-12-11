# Supabase Integration Guide

## 📁 Files Created

### Utility Files
- **`src/utils/supabase/server.ts`** - For Server Components and Server Actions
- **`src/utils/supabase/client.ts`** - For Client Components (use "use client" directive)
- **`src/utils/supabase/middleware.ts`** - For middleware session management

### Configuration
- **`src/middleware.ts`** - Auto-refreshes auth sessions on every request
- **`.env`** - Contains your Supabase credentials
- **`.env.example`** - Template for version control

### Example
- **`src/app/supabase-example/page.tsx`** - Example showing how to fetch data

## 🚀 Usage Examples

### Server Component (Default)
```tsx
import { createClient } from '@/utils/supabase/server'

export default async function MyPage() {
	const supabase = await createClient()
	const { data } = await supabase.from('my_table').select()
	
	return <div>{/* render data */}</div>
}
```

### Client Component
```tsx
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function MyClientComponent() {
	const [data, setData] = useState(null)
	const supabase = createClient()
	
	useEffect(() => {
		async function fetchData() {
			const { data } = await supabase.from('my_table').select()
			setData(data)
		}
		fetchData()
	}, [])
	
	return <div>{/* render data */}</div>
}
```

### Server Action
```tsx
'use server'

import { createClient } from '@/utils/supabase/server'

export async function createTodo(formData: FormData) {
	const supabase = await createClient()
	const title = formData.get('title')
	
	const { error } = await supabase
		.from('todos')
		.insert({ title })
	
	if (error) throw error
}
```

## 🔐 Authentication Example

### Sign Up
```tsx
const supabase = await createClient()
const { data, error } = await supabase.auth.signUp({
	email: 'user@example.com',
	password: 'password123'
})
```

### Sign In
```tsx
const supabase = await createClient()
const { data, error } = await supabase.auth.signInWithPassword({
	email: 'user@example.com',
	password: 'password123'
})
```

### Get Current User
```tsx
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
```

### Sign Out
```tsx
const supabase = await createClient()
await supabase.auth.signOut()
```

## 📊 Database Operations

### Select
```tsx
const { data, error } = await supabase
	.from('products')
	.select('*')
```

### Insert
```tsx
const { data, error } = await supabase
	.from('products')
	.insert({ name: 'New Product', price: 99.99 })
```

### Update
```tsx
const { data, error } = await supabase
	.from('products')
	.update({ price: 89.99 })
	.eq('id', productId)
```

### Delete
```tsx
const { data, error } = await supabase
	.from('products')
	.delete()
	.eq('id', productId)
```

## 🛠️ Useful Commands

### Generate TypeScript Types
```bash
npx supabase gen types typescript --local > src/types/supabase.ts
```

### Pull Database Schema
```bash
npx supabase db pull
```

### Check Project Status
```bash
npx supabase status
```

## 🔗 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Next.js App Router Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Example App](http://localhost:3000/supabase-example)

## ⚠️ Important Notes

1. **Server vs Client**: Use server utilities by default for better security
2. **Environment Variables**: Never commit `.env` to version control
3. **Middleware**: The middleware refreshes auth tokens automatically
4. **Error Handling**: Always check for errors in Supabase responses
