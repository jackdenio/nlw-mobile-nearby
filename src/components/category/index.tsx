import { Text, Pressable, PressableProps } from "react-native";

import { s } from "./styles"
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/theme";

type Props = PressableProps & {
  icondId: string
  isSelected?: boolean
  name: string
}

export function Category({ name, icondId, isSelected = false, ...rest}: Props) {
  const Icon = categoriesIcons[icondId]
  return (
    <Pressable style={[s.container, isSelected && s.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  )
}