import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

interface ProgramCardProps {
  title: string
  description: string
  duration: string
  degree: string
  href: string
}

export function ProgramCard({ title, description, duration, degree, href }: ProgramCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{degree}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Durasi: {duration}</span>
          <Link href={href} className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Selengkapnya
            <IconArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
