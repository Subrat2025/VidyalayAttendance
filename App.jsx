import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import Teachers from './pages/Teachers'
import Students from './pages/Students'
import Reports from './pages/Reports'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/"           element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/teachers"   element={<Teachers />} />
        <Route path="/students"   element={<Students />} />
        <Route path="/reports"    element={<Reports />} />
      </Routes>
    </Layout>
  )
}
