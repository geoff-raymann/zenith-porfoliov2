import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // Check for secret to prevent unauthorized access
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    console.error('Invalid revalidation secret attempted')
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { _type, _id } = body
    
    console.log(`Revalidation triggered for: ${_type} ${_id || ''}`)
    
    // Revalidate based on content type
    let pathsToRevalidate = ['/', '/projects']
    
    if (_type === 'project') {
      pathsToRevalidate.push('/projects')
    }
    if (_type === 'bio') {
      pathsToRevalidate.push('/')
    }
    if (_type === 'recommendation') {
      pathsToRevalidate.push('/')
    }

    // Revalidate each path
    pathsToRevalidate.forEach(path => {
      revalidatePath(path)
      console.log(`Revalidated path: ${path}`)
    })
    
    return NextResponse.json({ 
      success: true,
      revalidated: true, 
      now: Date.now(),
      paths: pathsToRevalidate,
      contentType: _type
    })
    
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json({ 
      success: false,
      message: 'Error revalidating' 
    }, { status: 500 })
  }
}