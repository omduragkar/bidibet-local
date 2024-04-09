import { PropsWithChildren } from "react"
import { FlatList } from "react-native-gesture-handler"

export const VirtualizedList = ({children}:PropsWithChildren<{}>) => {
    return (
        <FlatList
            data={[]}
            keyExtractor={() => "key"}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}