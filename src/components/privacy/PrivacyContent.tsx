const PrivacyContent = ({
  selectedContent,
}: {
  selectedContent: { title: string; content: string };
}) => {
  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">{selectedContent.title}</h2>

      <p className="mt-6 leading-8 text-neutral-600">
        {selectedContent.content}
      </p>
    </div>
  );
};

export default PrivacyContent;
