function Tour({ params }: { params: { id: string } }) {
  console.log(params);
  return <div>This is a dynamic route</div>;
}
export default Tour;
