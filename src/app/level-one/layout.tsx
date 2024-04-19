export default function LevelOneLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-background min-h-screen flex flex-col ">
      {children}
      </section>
    )
  }