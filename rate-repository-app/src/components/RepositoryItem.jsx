    import { Text, View,Image, StyleSheet } from 'react-native';
    import theme from '../theme';
    const style = StyleSheet.create({
        containerRow:{
            flexDirection: 'row',
        },
        containerColumn:{
            flexDirection:'column',
            backgroundColor:'white'
        },
        column:{
            flexDirection:'column',
            marginLeft:10
        },
        containerColumnStat:{
            flexDirection:'column',
            alignItems:'center',
            flex:1
        },
        containerCenterRow:{
            alignItems: 'center',
            flex:1,
            flexDirection:'row'
        },
        avatar:{
            width:50,
            height:50,
            borderRadius: 25
        },
        fullName:{
            fontWeight:'bold',
            fontSize:18,
            fontFamily:theme.fonts.main
        },
        statBold:{
            fontWeight:'bold',
            fontFamily:theme.fonts.main
        },
        fontFamily:{
            fontFamily:theme.fonts.main
        },
        textBackground: {
            backgroundColor: theme.colors.primary,
            padding: 5,
            borderRadius: 5,
            alignSelf: 'flex-start'
            
        },
        flexContainer:{
            marginTop: 5,
            overflow: 'hidden',
            borderRadius: 5,
        }
    })

    function formatNumber(number) {
        if (number >= 1000) {
          const roundedNumber = Math.round(number / 100) / 10;
          return `${roundedNumber}k`;
        } else {
          return number.toString();
        }
      }

    const RepositoryItem = ({item}) => {
        return(
            <View testID="repositoryItem" style={style.containerColumn}>
                <View style={style.containerRow}> 
                    <Image style={style.avatar} source={{uri:item.ownerAvatarUrl}}/>
                <View style={style.column}>
                    <Text testID="fullName" style={style.fullName}>{item.fullName}</Text>
                    <Text testID="description">{item.description}</Text>
                <View style={style.flexContainer}>
                <View style={style.textBackground}>
                    <Text testID="language">{item.language}</Text>
                </View>
                </View>
                </View>
                </View>
                <View style={style.containerCenterRow}>
                    <View style={style.containerColumnStat}>
                    <Text testID="stargazersCount" style={style.statBold}>{formatNumber(item.stargazersCount)}</Text>
                    <Text>Stars</Text>
                    </View>
                    <View style={style.containerColumnStat}>
                    <Text testID="forksCount" style={style.statBold}>{formatNumber(item.forksCount)}</Text>
                    <Text>Forks</Text>
                    </View>
                    <View style={style.containerColumnStat}>
                    <Text testID="reviewCount" style={style.statBold}>{formatNumber(item.reviewCount)}</Text>
                    <Text>Reviews</Text>
                    </View>
                    <View style={style.containerColumnStat}>
                    <Text testID="ratingAverage" style={style.statBold}>{formatNumber(item.ratingAverage)}</Text>
                    <Text>Rating</Text>
                    </View>
                </View>
            </View>
        )
    }
    export default RepositoryItem