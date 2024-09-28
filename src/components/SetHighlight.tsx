function SetHighlight({ text, search }: any) {
  return (
    <>
      <span>{text.slice(0, text.toLowerCase().indexOf(search))}</span>
      <span style={{ color: "red" }}>
        {text.slice(
          text.toLowerCase().indexOf(search),
          text.toLowerCase().indexOf(search) + search.length
        )}
      </span>
      <span>
        {text.slice(text.toLowerCase().indexOf(search) + search.length)}
      </span>
    </>
  );
}

export default SetHighlight;
