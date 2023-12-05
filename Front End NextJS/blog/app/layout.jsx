import '../public/assets/css/style.css'
import '../public/assets/images/favicon.ico'
import '../public/assets/vendor/font-awesome/css/all.min.css'
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../public/assets/vendor/apexcharts/css/apexcharts.css'
import '../public/assets/vendor/overlay-scrollbar/css/OverlayScrollbars.min.css'

export const metadata = {
  title: 'Blogzine',
  description: 'Bootstrap based News, Magazine and Blog Theme',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}    
      </body>      
    </html>
  )
}
