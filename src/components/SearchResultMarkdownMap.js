import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view/dist/index.esm";
import { useEffect, useRef } from "react";
import { deriveOptions } from "markmap-view";

const markmapOptions = deriveOptions({
  maxWidth: 1000,
});

const getMarkdown = (input, data) => {
  //   constructing  data
  const {
    Bedeutungen,
    Beispiele,
    Gegenwörter,
    SinnverwandteWörter,
    Synonyme,
    Unterbegriffe,
    Wortbildungen,
  } = data;

  //   markmap
  return `# ${input}

 ## Bedeutungen
    ${Bedeutungen?.map((item) => `  \n -  ${item} `)}
      

 ## Beispiele
    ${Beispiele?.map((item) => `  \n -  ${item} `)}

    
## Gegenwörter
    ${Gegenwörter?.map((item) => ` \n -  ${item} `)}


## SinnverwandteWörter
    ${SinnverwandteWörter?.map((item) => ` \n -  ${item} `)}

## Synonyme
    ${Synonyme?.map((item) => `\n - ${item} `)}


## Unterbegriffe

    ${Unterbegriffe?.map((item) => ` \n -  ${item} `)}


## Wortbildungen

    ${Wortbildungen?.map((item) => ` \n - ${item} `)}


`;
};

const SearchResultMarkdownMap = ({ wordToSearch, resultPageData }) => {
  const value = getMarkdown(wordToSearch, resultPageData);

  const transformer = new Transformer();

  // Ref for SVG element
  const refSvg = useRef();
  // Ref for markmap object
  const refMm = useRef();

  useEffect(() => {
    if (refMm.current) return;

    refMm.current = Markmap.create(refSvg.current, markmapOptions);
  }, [refSvg.current]);

  useEffect(() => {
    // Update data for markmap once value is changed
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);

  return (
    <>
      <div className="flex flex-col h-screen p-2">
        <svg className="flex-1" ref={refSvg} />
      </div>
    </>
  );
};

export default SearchResultMarkdownMap;
