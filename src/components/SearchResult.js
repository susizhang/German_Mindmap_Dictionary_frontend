// import MarkmapHooks from "./MarkmapHooks";
import Nav from "./Nav";
import React, { useState, useRef, useEffect } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view/dist/index.esm";

const SearchResult = ({ input, searchedWord }) => {
  const transformer = new Transformer();
  const initValue = `

    # Zeit

    ## bedeutungen
    -  die vom Arbeitgeber dem abhängig Beschäftigten 
    oder Dienstherrn dem Unterstellten gewährte Freizeit 
    in Höhe von einem oder meist mehreren Werktagen
    - useful
    ## beispiele 
    - Für den Umzug nehme ich mir Urlaub.
    - interactive

    ## gegenwörter

    - Arbeit 
    - Dienst

    - <https://markmap.js.org/>
    - [GitHub](https://github.com/markmap/markmap)

    ## unterbegriffe

    - **inline** ~~text~~ *styles*
    - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$

    - This is a very very very very very 
    very very very very very very very very very very long line.
    `;

  const [value, setValue] = useState(initValue);
  // Ref for SVG element
  const refSvg = useRef();
  // Ref for markmap object
  const refMm = useRef();

  useEffect(() => {
    // Create markmap and save to refMm
    if (refMm.current) return;
    refMm.current = Markmap.create(refSvg.current);
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

export default SearchResult;
