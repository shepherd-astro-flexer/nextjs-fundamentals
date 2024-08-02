function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="text-2xl p-2 rounded-sm bg-green-500 w-1/2 text-center">
        Tours Layout
      </div>
      {children}
    </div>
  );
}
export default ToursLayout;
