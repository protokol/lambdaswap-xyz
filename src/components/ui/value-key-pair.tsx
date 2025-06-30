type ValueKeyPairType = {
  label: React.ReactNode;
  value?: React.ReactNode;
};
export function ValueKeyPair({ label, value }: ValueKeyPairType) {
  return (
    <div>
      <div className='text-muted-foreground text-xs font-medium'>{label}</div>
      <div className='text-accent-foreground font-mono text-xs break-all'>
        {value}
      </div>
    </div>
  );
}
