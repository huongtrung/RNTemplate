import React from 'react'
import {FlatList, FlatListProps, RefreshControl} from 'react-native'

interface IProps extends FlatListProps<any> {
  onRefresh?: () => void
  onLoadMore?: () => void
}

const FlatListView: React.FC<IProps> = ({
  data,
  renderItem,
  onRefresh,
  onLoadMore,
  ...props
}) => {
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={(e, i) => i.toString()}
      extraData={data}
      keyboardShouldPersistTaps="handled"
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            onRefresh && onRefresh()
          }}
        />
      }
      onEndReachedThreshold={0.5}
      onEndReached={() => onLoadMore && onLoadMore()}
    />
  )
}

export default FlatListView
