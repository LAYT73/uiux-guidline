import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { TopicPage } from '@/pages/topic'
import { pagePresence } from '@/shared/lib'

export function AppRoutes() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (typeof window === 'undefined' || window.scrollY === 0) return
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [location.pathname, reduceMotion])

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...(reduceMotion ? {} : pagePresence)}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:section/:topic" element={<TopicPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}
