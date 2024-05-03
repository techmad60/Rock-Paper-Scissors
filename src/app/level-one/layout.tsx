

export default function LevelOneLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-background p-8 min-h-screen flex flex-col overflow-hidden">
        {children}
      </section>
    )
  }