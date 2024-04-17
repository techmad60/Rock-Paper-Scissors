export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-background min-h-screen flex flex-col justify-center items-center">
    {children}
    </section>
  )
}