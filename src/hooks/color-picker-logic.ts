import {palettes} from "../common/palettes";
import {convertExportStringToColors, findClosestColors, useStickyState} from "../common/helpers";
import React, {useEffect, useRef, useState} from "react";
import {MatchedColor} from "../components/Suggestions";
import {debounce} from "lodash";
import Color from "color";

export const initManualColors : string[] = Array(48).fill("")

export const initAvailablePalettes = palettes.map((palette) => palette.name)

const initMatchedColor = {
  distance: 0,
  color: "#000000",
  paletteName: "Classic",
  position: {x: 0, y: 0},
  uid: "3274823"
}

export const useColorPickerLogic = () => {
  const [paletteColors, setPaletteColors] = useStickyState(initManualColors, "manualColors")
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const [matchedColors, setMatchedColors] = useState<MatchedColor[]>([])
  const [isColorChanging, setIsColorChanging] = useState(false)
  const [selectedColor, setSelectedColor] = useState<MatchedColor>(initMatchedColor)

  const [showImportModal, setShowImportModal] = useState(false)
  const [showPalettesModal, setShowPalettesModal] = useState(false)
  const [availablePalettes, setAvailablePalettes] = useStickyState<string[]>(initAvailablePalettes, "availablePalettes")

  const debounced = useRef(debounce((fn: () => void) => fn(), 150, {trailing: true, leading: false}))

  const getCurrentColor = (): string => {
    const color = paletteColors[currentColorIndex]
    if (color === "") return "#000000"
    return color
  }

  const updateSuggestions = () => {
    const filteredPalettes = palettes.filter(palette => availablePalettes.indexOf(palette.name) !== -1)
    const closestColors = findClosestColors(getCurrentColor(), filteredPalettes, 50)
    setMatchedColors(closestColors)
    setSelectedColor(closestColors[0])
    setIsColorChanging(false)
  }

  useEffect(() => {
    updateSuggestions()
  }, [])

  useEffect(() => {
    if (!isColorChanging) {
      setIsColorChanging(true)
    }
    debounced.current(updateSuggestions)
  }, [paletteColors, currentColorIndex, availablePalettes])

  const onCellClick = (index: number, e: React.MouseEvent) => {
    if (e.type === "contextmenu") {
      e.preventDefault();
      const newPaletteColors = [...paletteColors];
      newPaletteColors[index] = "";
      setPaletteColors(newPaletteColors);
    }
    setCurrentColorIndex(index);
  }

  const onColorChange = (color: Color) => {
    const newColors = [...paletteColors]
    newColors[currentColorIndex] = color.toString()
    setPaletteColors(newColors)
  }

  const onSuggestionClick = (key: string) => {
    const filteredColor = matchedColors.filter(({uid}) => uid === key)[0]
    if (filteredColor.uid !== selectedColor.uid) {
      setSelectedColor(filteredColor);
    }
  }

  const onAcceptImport = (data: string) => {
    try {
      const importData = convertExportStringToColors(data)
      setPaletteColors(importData)
      setShowImportModal(false)
    } catch (e) {
      console.log(e)
    }
  }

  const onPaletteClick = (paletteName: string) => {
    const isExists = availablePalettes.indexOf(paletteName) !== -1
    if (isExists) {
      if (availablePalettes.length === 1) {
        setAvailablePalettes(["Classic"])
        return
      }
      setAvailablePalettes(availablePalettes.filter((el: string) => el !== paletteName))
    } else {
      setAvailablePalettes([...availablePalettes, paletteName])
    }
  }

  const onOverrideColor = () => {
    onColorChange(Color(selectedColor.color))
  }

  const clearAvailablePalettes = () => setAvailablePalettes(["Classic"]);

  const showAllAvailablePalettes = () => setAvailablePalettes(initAvailablePalettes)

  const onScreenshotImport = (colors: String[]) => {
    setPaletteColors([
      ...paletteColors.slice(0, Math.floor(currentColorIndex / 8) * 8),
      ...colors,
      ...paletteColors.slice(Math.floor(currentColorIndex / 8 + 1) * 8)
    ]);
    setShowImportModal(false)
  }

  return {
    availablePalettes,
    showPalettesModal,
    setShowPalettesModal,
    onPaletteClick,
    clearAvailablePalettes,
    showAllAvailablePalettes,

    showImportModal,
    onAcceptImport,
    setShowImportModal,
    onScreenshotImport,

    paletteColors,
    onCellClick,

    getCurrentColor,
    onColorChange,

    matchedColors,
    onSuggestionClick,
    // TODO refactor method name
    isColorChanging,
    // TODO refactor method name
    onOverrideColor,

    selectedColor,
  }
}

