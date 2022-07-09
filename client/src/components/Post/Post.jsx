import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ScrollSectionContext } from '../ContextProvider'

export default function Post({ post, index }) {
  const scrollRefs = useContext(ScrollSectionContext)
  const postRef = useRef(null)

  useEffect(() => {
    if (postRef && postRef.current) {
      const observerOptions = {
        root: null,
        rootMargin: '400px',
        threshold: postRef.current.offsetHeight > 450 ? 0.5 : 1,
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(entry)
            scrollRefs[post.slug].current.classList.add('intersecting')
          }
          if (!entry.isIntersecting) {
            scrollRefs[post.slug].current.classList.remove('intersecting')
          }
        })
      }, observerOptions)
      observer.observe(postRef.current)
      return () => {
        observer.unobserve(postRef.current)
      }
    }
  }, [postRef, scrollRefs])

  return (
    <>
      <div ref={postRef} id={post.slug} className="Post">
        <p className="index">{index + 1}</p>
        <div className="__title">{post.title.rendered}</div>
        <div
          className="__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
      <div className="Divider"></div>
    </>
  )
}
