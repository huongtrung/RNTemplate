import AsyncStorage from '@react-native-community/async-storage'

const setItem = async (name: string, params: any) =>
  await AsyncStorage.setItem(name, JSON.stringify(params))

const getItem = async (name: string) => {
  const result = await AsyncStorage.getItem(name)
  return result ? JSON.parse(result) : result
}

const removeItem = async (name: string) => await AsyncStorage.removeItem(name)

export {getItem, setItem, removeItem}
