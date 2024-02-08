export const SectionGap: React.FC<{ gap: string }> = ({ gap }) => {
  return <section className={`w-full`} style={{ height: gap }}></section>;
};
