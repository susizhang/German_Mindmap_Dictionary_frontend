import { useState, useRef, useEffect } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view/dist/index.esm";
import { useParams } from "react-router-dom";

const SearchResult = ({ searchedWord }) => {
  const { id } = useParams();
  //   console.log("input", id);
  //   console.log("search ", searchedWord);

  //   props data
  const {
    Bedeutungen,
    Beispiele,
    Gegenwörter,
    SinnverwandteWörter,
    Synonyme,
    Unterbegriffe,
    Wortbildungen,
  } = searchedWord;

  //   markmap
  const transformer = new Transformer();
  const initValue = `# ${id}

## Bedeutungen
- ${Bedeutungen[0]}
- ${Bedeutungen[1]}
- ${Bedeutungen[2]}
- ${Bedeutungen[3]}
- ${Bedeutungen[4]}
- ${Bedeutungen[5]}

## Beispiele

- ${Beispiele[0]}
- ${Beispiele[1]}
 
## Gegenwörter
- ${Gegenwörter}

## SinnverwandteWörter
- ${SinnverwandteWörter}

## Synonyme
- ${Synonyme[0]}
- ${Synonyme[1]}
- ${Synonyme[2]}
- ${Synonyme[3]}
- ${Synonyme[4]}

## Unterbegriffe

- ${Unterbegriffe[0].slice(0, 180) + "..."}
- ${Unterbegriffe[1]}
- ${Unterbegriffe[2]}
- ${Unterbegriffe[3]}
- ${Unterbegriffe[4]}
- ${Unterbegriffe[5]}
- ${Unterbegriffe[6]}
- ${Unterbegriffe[7]}
- ${Unterbegriffe[8]}


## Wortbildungen

- ${Wortbildungen[0]}
- ${Wortbildungen[1]}
- ${Wortbildungen[2]}


`;

  const [value, setValue] = useState(initValue);
  // Ref for SVG element
  const refSvg = useRef();
  // Ref for markmap object
  const refMm = useRef();

  useEffect(() => {
    // Create markmap and save to refMm
    // console.log("1 ", refMm.current);
    if (refMm.current) return;
    // console.log("2 ", refSvg.current);
    refMm.current = Markmap.create(refSvg.current);
  }, [refSvg.current]);

  useEffect(() => {
    // console.log("3 ", refMm.current);
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

export default SearchResult;
