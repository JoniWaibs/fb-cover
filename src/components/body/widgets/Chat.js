import React from 'react'
import OnlineContact from './OnlineContact'
import {ChatContainer} from './styles'


const Chat = () => {
  return (
    <ChatContainer>
      <OnlineContact
        contactName="Jonatan Waibsnaider"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Satoshi Nakamoto"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Richard Hendricks"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ljgB-6W1FHlkhRsCTX5BifDGWnbWkgqu9AEjD1diWxaHNkeoNLHt2KN8yxal7xt_UnI&usqp=CAU"
      />
      <OnlineContact
        contactName="Dave Grhol"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Serena Williams"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Bill Gates"
        contactAvatar="data:image/jpeg;base64,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"
      />
      <OnlineContact
        contactName="Jeff Bezos"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXlLbSJxvT96Ao8xCEfVNQHlVW3jiUajoIQ&usqp=CAU"
      />
      <OnlineContact
        contactName="Kun Aguero"
        contactAvatar="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEVFRIREhUSEhgSGBEYEhESERgSEhIRGBgZGhoYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQhJCExNjQ0MTQ0NDQ0NDE0MTQ0NDQ0NDE0NDQxMTQ0NDQ0NDE0MTE0PzFAND80NDQxMTExMf/AABEIAKkBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQQFBgcAA//EAEUQAAIBAgMFBAUHCgUFAQAAAAECAAMRBBIhBQYxQVETImFxMnKBkbFCUmKSobLBBxQjJDNTc4KD0RY0Q+HwFRdUk6Jj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAwACAwACAwEBAAAAAAAAAAECAxESITEEQRMyUSIU/9oADAMBAAIRAxEAPwC3QxBhCQUFiiIIsAIThOHOKIAs8sT6DeU9Z5Yn0H8oBQd4N5uwrVKKUKTBCBds12uAfZxkYd+G/wDHoe5v7yM32/zlfzX7okATALh/jd//AB8P9Vj+MT/HT/uMN9Q/3lPJnQC4f47q/ucMP6Z/vFO/Vb5mHH9L/eU6LaAW4b8Yj5tH/wBKwxvtieXYj+isps6NAt776Yvk9P2UVjd99sb88DypoPwlWJiEwCyNvpjv3rexUH4TzbfDHH/WqewgfhK9OgE229WMP+vV+vaeDbyYw8a9X65kVFEAfttvFn/Wq/8Asb+88m2tiTxq1D/Ub+8axCYB7tj6x4vU+u394BxVU/Lf65/vPO86NAJnc8Xb2kwSX+cYonMY0Bzslm7ejqfTT7wm1bP9H+Z/jMT2T+3o/wASn94Ta9m+ifWf4wByYJhmDAAMGGYkAAwTDMAiACRBtDMSCxKwhBEKCooiiIIogBLFnLznQBRAxA7jeUMQMT6D+qYBjO/R/Xa/8n3BK8TLBv1/na38n3BICCUDedOtFtBIqiPcNgKj/s0Zzxsqljb2RvRS5E2fdnCLgdnvinW1Sopyk8dRpaAYxVpFSVIII4gixEFKTMbKCfIXlhXZhdjVrErnJIX5TXj7D0Xz9jh6RvYG+W/HmTDZCRX6WwazC5yp6xnoNhrwarTHgNZa13YqE5sQ5b6ANgDJbCbJpoL5E8rXvKukaKCgpsBDwct6qXgVNhgfLt6y5ZpGA2K5YlO7ztwjrGYRGHZYimtVDbUCzqeoPWRyI4mSVtj1F1GVx9E6+6Tm6W6K41Kv6U06lMHIhUFWI1seY0lq2luJZO0w7sDxCvx8riVvZW1MRga93FmBGYH5QEumU0VPH4VqTvTf0kJBjS8uO/rUK7ri6AyioB2lP5SP+I8ZTjBJ14oMC868FT0vOJgAzryQPNkn9Yo+vT+8JtuzvRb13+MxHZH7ej69P7wm3bM9FvXf4yAOTBhmDABnmZ6meZgAmcRFIiGACRAnoRBgsSYhCADCBgqEIsSKIAazpy8J0AUQMR6D+qYYnnifQf1TAMb3+FsbU8RTP/yJXJZvygD9cqepS+6JWCYJQohgTzDQ1MEkxsLB9pVpqeAOZj0RdT8Je9o7eqYhEpkAJTvkRRa45XHWRO4LpQLYqqudfQVNO9zJ1kngaNPE456oGRV7yINFA5XAgDYYB0776uw0HzAeQ8ZcN36YSiCAM9Q3YnjPLE7PBe9/HWO6b9myLa4sPtmVUazKfh47UBzC8ZMbcOMkMRTz5jqPONKeFfWwJMz5I2/G0SNLF2QuBYgDNbnb/aRmNxuYhhw4jqL8p6jDuBY3APERs2HsZPJFfxsmsDibouZtTfu9JBb2buJiVNRBlqKLLyDetHCEgjjYcxJDKCBZwPOXm0ylY2uzM9l7tVq4rUQ1PNRDFkY2bTiF8pSMRTKMynipImhb341KNcikSpqIO0YEjNfj7xKVthBmU8yNTytympgyNnRDOEECzp06SB5sj/MUP4lP7wm37N9F/Xf4zD9kft6H8Sn94Tcdnei/8R/jIA4MGGYkAGBaHB5QADBMMxILAGJCMS0AkIQgCEDBUKEIMUGAei8DEvO5QYAYg1/Qf1T8IoM5x3WHUH4QDHfyiD9cf1KX3RKsZbPyjD9cb1KX3RKmRBKEtDp8R5iCI92dQzuL6BQWJ8B/wQEtlqw+LX83Sjl7yMSHB0ykaqR5x3u7tFKVclzYOAvtkElN0IZ1Kq/ok8DHZw4tn8oJNRRlexvccjPR2BI04cJUt3NpMVNNjrTNvNeUtCtcAzDI9HThW2e4a+kc4ewjNqioLm58p5f9aoqbMr+xSZgpZ1U0Srgf8EZYigG4C3sjrD4um4GQ8fYY5WkOMlyyqrXpEGmAOEiNoUtLi4k3tXHLTB7pby6yvdri6l2ZFVDy+VaWmWuxdKlooe+FG9Zmve4W3laQmOp3p02OpXQnrLDt/Cue0qW7tMql7/K429xkWMNnpsNe6jOLfRnVPh51eldaIIbLEtJKiTotp1oA62T+3ofxKf3hNx2cdKnrv8ZiOyk/TUD/APpT+8Jt2AGlT13gDkxIpiQDhAhrxgsIB5wTCMEwWEMSKYkAfAwgYEIQVDvFUwYqwD2+TfxgQge7bxgXgCiHeAIrHQ+RgGU/lFpg4w/w6Z+wyohJcN/m/W/6NP4GVIGActMR/s9rMVsO+VBPMC8a0kLEKNSdABJnE7JeiqOTmDEajl4GVdynpmsxTTpLpEymFerVq0FIAyFzm4DIM1x7olVbUqnq3i0H/Wn72UPTqDN/Jw9s8ajfomHVPwl9Gez0oVVWvRZb/pETP5kf7S/Ye9l9kzzBJTK06hPfU0Aq5vSUkhtPDSafg6YKic+XR2fH8ErYpUAOUMTYAWvcmMaGNNZ2pI1POM10yEE24gHgTJdsKLq1hddRG2B2HTpVWxCZg7X0zd1SeNhKS1ovTG+CDKSCtrayYepZC3hBdOJtxnnT1VlPjKtmmtoq22cYy5XqBwjk5QtgTbjcmeykp2T03LpWTMuYEMunBgZKPh0dclRQ4QmwYXAPhBfDkldNFFgOQHhJ5LRRS9mW7wVXD4mmdAWV7eOkZ7PqWVujJUU+RUx/vqcuJqj5yqfbIfA18qkkA91xr4gi86ZfRw31TIV+MG8BmiXliD0JiXgXnQVJDZj/AKah/Ep/eE27ADu1P4j/AITCcAbVaR6VKf3hN1wB0qfxH+AgDkxIpiQBU4iJV4mch1ESodTAPKCYRgmCwhiRTEtBUdGtTyGoXXIL3e/dFouFxFOoL03VwOOVgbTOaCM6stQEC57uY5WHW09MLRCNnpsUYc0c/bNfxHL/ANKT8NKyzrSuYLeRgMtZC/00tf2rLHRqK6K68GAIvobTOpc+m8ZJtbQo4H2TonIzgZBcJYVRO6x8DESelY9x/VPwkbBkG/5P51/SpfaDKqiMTlAJJ0AAuSZoe8mx3q1mcslNMlIGo/UDW0jlxWFwwK4dRUe1u2ccD1AlKvXhvGLf7dHbs7EKMXqjvLa6/u78AfpfCWPE0ldWQjQj3eMDZlIrTUnVnu7nqzaz2YTz6tu9/wAPax4pmOP9KdiXKVGLj0Qy+9eIhviR2R9UT13qo2IqfO0bz5GVyrjO4VvPQxXynZ4vyMXC2h/hsUM9H6GX4zXdkYrMBMQwGZ3AUaqLnyHGabu/j/Q15WlbWy+F6Rf1M9LRlh6945DzLw2aPLGPZZ54XhBx9yulrjgCbXkMu1Kid49m4vbKhswPt4wls05JIllSzuDz1ENiAJXsLtg1K/esgA7qE6n2yTxeJspN+EceyOS0ZPv/AFwcUwHJVHtkA9bKmXmQbjpPbefEF8TUfqdDIdmvzvOmfDgv9hTEnXnXlimjosHNFvBB74T06frp94Td8CP2nrn4CYLhm76eun3hN6wP+p634CAOTEimJAOEFucb4/aNGgueq4QG9tLkkchKRtneCtiQyYcimgNtTlepoT8ISG9Fkxm8uEpvkL5jezFRdV8zAxO8uER0TOGDcXXVU6XmXYug6EBmVri4Km4I/wCCNy8nRKNUr714RXCZywI9NRdAeklKWNosAwqIQeHeExbNC7U+PvjRJbcVi86qKYaz3APok2PKeuz8EqAuyENxFnufbGuBpuKZpOO9TZMmvBWuT8JJ4dmcZSwUozA2GjWmeXLSovg+Pjcf3Z61qiI2QuoNgbE2NiLy5bv1A2HSxvbMPtmb7zU6Yem7Xu4/SZeJAA4dJdtx8Uj4chAQqsQFPECwmzrlO2cqw/it6+yxHnBEU85G4nGMCVQi3XnfnMapSuzqjHVvSH1TEKmpN/AcZW9ubzZLqDc/MU6D1jIXbm3iL06bdczg6k9BKliMQTqZRcqNa44+l2x1tLa9Rzd3J6LyHkJFpWu4843rVINK9w3QiXc9GSptrZreFPcp+qvwnNI/ZGKD0KbX4Cx9k7FY9E9JwPbczznD2e6rlSm2M9vIGp1B0Fx7JndQ6mXbF7YpsGAzG9xwlV/NATczrwS5ns8z5lTVJy9khuYubE5OTo4PtEsOzKppu9JjqhNr9JF7pU1XE07D53wk5vhgWRkxFMW5NbnL01sylf5LNsnaNyLmS+O2mKa3PPgJluF2uRaxIN9ZPHHGu1MX0FgZVyWV76JuptKrV9Cw4Xv05waez017SodddBoDHXZ0UUd0ADoNTGVfeHDISmTNbjpKrZ0JSv2ZGbVwyJ36buWHha/ujJNssaVRGJuNNeN+kkK+2UchUQi/hKrturbPl0B1PnNJWzDNSX6s88NWw1YdlVUDU5X5++SFDcjDNb9LUF+HdFvfKajm95bd3NsG4pubg8Cfkn+0ilU9orDm1pkgv5OqJ/1Kn1Vh/wDbej+8qfVEtGCxZXusbjkeklFPMS8WqRllxPG+yhj8m1D95V+qsP8A7cUP3lX6qy+AxCZoZlGpfk7w6srZ6pykG1l5G8ueHplc1xxIt7p65oJaAKZ0ScDAKf8AlGH6Gkfpn4Sj7NxDDtEFzmU2UAceBPhYEy/flFAOHTwcfCUnYey6tUs9Ox7PQ38RLSUpdDTarrmRVJPZqFJYWPG4+wxjTps5CrqTwkxtrY9WllqVODm1/ECFsPAliamlgQo63kW9LZfHPJpDVt3MSBmsn15Hvg6gJFuEveJeqiNmyk6ZSBwU9ZCVcBVuZzLJX2dLxT9EttG6o1RPSQe9ZC4XaFMIwKnOSWz5tbz3w20S4ZHIsVIZibcegnng8LhEIao5e3yQDofxnVmlN7SOP4lVM8afh2M2dXdUq2zZlGl9R4Wlt/JwXVatNwVOhAPSQuM23TKZKYIOliRwAkluXjy1fKSLlCDJ46grVV+TX0XPaFfKthxb7BKztnElKTEGxbQH4yX2s/fA6KJUt7qpCIo5gmcDfLJpnrzKnBtesqVatc3jaq84z1p4e+re6dSWjzd7GdKmWJ6CPFpaW5c45CgaCcbSwDo4uoi5EYqp5CeTsSddYM5pXSLc6fWwp04TryxUld2P8zS/m+E0TaGEFSmUIveZrsOplxFE8Ltb3zWqS3Wc2TpnTi7kx3auBejUIF8sdbIxwDAMbeMue9Oyg6FgNeszuvhHRvLnLy9opUuXs0Z9rUhTX5RHAfjIGu6FxUa1vSyj5XhIvAZnuihmKi5tqYGNZkIDGxtqp4iSkkQ6bPV8YUY5eDHhI3alS/8ANPbKXIHlI6u5ZiDyJlp9KV4NTTInrh6hRgR7Z62gMolmiq6NI2RXz0la+o0Psk7sutcFDxXh5So7n1L06i3vYr8JY9ln9IR9Ezijc5Wv6ell1eBV9k0JxnCcDO48sS0SRW0t4aNCoKNQPmIuLLpbX+0ane7DWvkq265OVgb+4iUdyWUk8Ykh23koBO1tUyaaheptae2zNuUa79lTz5rMQSuhCi5kc53oOWiN39X9WB6OsomxGxBcpQJGaxbWwsOsv2/S3wj+DL+MoO721VoO+e+WoACyi5Rgbg25zZPSKtbPXby4lcqVtRxUjVb+cabKxbo1l1DEXHiOklNt7Wp1kSlTJc5rs7DKOgAgbP2bSS1RqyMykHIp0A8+cUtyTNcWj1r41aiOzsw5Kq+HWRP/AFZ/nR9tXB0GJenUUE8VB0vIf80X56++cyg6Kt/RIq9BOBv9t4GIxdMoyqNSLXGkj8SqgjJcDx4z1wDtdgFDXA8/ZOt0cfFenh3rX1t1k5uViSuKp68dPfGAFQ0zooUAg9dIGw6uSvSboy+68h1vosjVNtmzq3Jh9old3jwxqU8y8aepHVectO1qedDbiO8sgKNcBSX4AG9+k87ImsiaPWw0rwuX9FCp0rG55cJ7Ew8RUUsxUWBJsOgnhmnZPh5lLT0FeITAJikywOfjOiExLwAwYsAGLeAFnKkMNCpBB8RNh2JjFrUadRflKL+DDiJjstW422Ozc0HayVCMl+Cv/vMsk7RrirT0aBi0DLYyp7S2SpuR7rS3uukY1qN5gq0dLWynbKwJo10c6K3dbyOke7Y2OHruRqBl1PlJzE4EFH62JHmNZ2GYOQx+WiN7RoZpy2jLik9FQxOz8g0HeJCrb5x0ErW08IaVapSJuUNifG15p9LDB8TTW3dpDO3rHRR+Mzzedw2MxBXhnI92ktje2UyrSIwwTDMCbGJ74LGVKTB6bZT9hHQiXvdXb1Oo7CoVpuQAoOgbyMzwxVMrwW9lldKeO+jcSJwEzzdze96bLSxBNRDYCodXp+Z5iXwY+kdQ1weBsbEe6WMyA3vp0jWpl0ViKdOxuQRx6SCYUDan2fojMACRodNTz4SX2+wfE0iDmGQD3XMWgzEXKpexANtcvSazihpdHPV2qffRHA0imQoAtrABm4cffJjdCnQTE0wi2L511JPpKRzkI6DtcmoDWIsOFxf8JI4FhQr4ep3iM6gnp4yKw4t7Xomsv34P99V/VangV+MyhkBOmk1vfNb4Wv7/ALZleAK5wW1FjeZo6QcHZHVnBKi5Ol7yVGNoi1g1hyyfZGzPTJe4NiRYgcBaReJtnIXhy4iXT0Ua2yd/PqXAg8WN8nI8pAvSckkKbEm2k9cDUQM2dc2mnOxvxk9ha1LKLPl46dNZRssloY7aw7JZTyJjDCMA2pKgjUjjJ3e1LPTsOIJPnK9lJ0AhMNGhYVKPZooRSMq3NtSSNSYy/MqZAemuUhrAGx1HSP8AA0bU6YPHIl/dHGFpomUaC7C19bsZnVNVoT4TtO5RS3Eqt/dKZvBXyIyji7Efygy+OJl+8VfNVZQdFJ999ZDlU0zaLcy0vsiSYIMUwDNTMJjEBiEwVaAHOnAzoAQiwIcAWKjWII0IsQehEGJmkMJ6Ng3Y2oMTQVvl07LUHjyPtkuMMJke6e2Thq6sxOR7LUHLKeB9hmyAggEaggEHqJzVOmdmOuSGdemLH/mkr2Gr00FBndQuepTzXvclrpw85aHUGU3FUloNVyqMlKorKlrqpdTaw85aEVye7JrZZATEVzoWaob/AEEuB8Jjtd8zs54sWJ9pml7xbUXDYJKIP6SqgW3MBvSJmYCXhaMclb6CMQzp01MwSJwimJAFEt26u8pplaFY3QkBHPGmTyP0ZURCUwVL/vNnWqj07X5HlY9PfJZKFNDTRrgsuhJ0uBrKfg8aatJAzXakcvjkt3T9lp7VXrkL2jueOTNxA8Juk9LRg2uT39C4lKwq1FVSchspXXum5Bv7YofEGwZahAy8QCBY+Akrg6gp5hWdVZghBJ4gA2/COWxtIG+dNQRfNzuSPjIXhL99Hm865sHWP0LzLMBTqAoyLfMGtfgbDWbCUStSyN3kqLY25g9JUH3brUnCUHugLFcwAK34iY/ZsVmkrl6ncsVCllB0zW0kVj2JqAsApsugN9JaNr4XF0kq1GUgsyKWABJC+UqNWsznM5uRpwtDZCR67NzZ2ygMbNoxsLRviB3muLG5uAdBFSoynMhIJ0v4T2/Mq79/s6jZtb5DrBLRfn2lgWBFR6T34XPDyjLAvs6nU7QVKZ6KxuBKCYMEGpVdtYQkntqWvINYTyfauFJS1an3WBPe4ATNl4RTJ0QkartTeyiiMadSnUc6KFPDxMz2viQxLE3JJJPUyNE6V0aD7tV6wWqDrGc4yQOu0HWJnHWNp0Adq46xc69RGYnQB92q9Yvar1jCcYA/7ReogmovURlOMAeiqvWaTufvfQ7HssTUWm1OwR3Ng6cvaJlM5pFSi0058Nzqb1bPUEnE0zbkDc+wSKfeTAVaONPaojuKfZrUOVnZDcECZBFaVmUWq3XpK47FF3Lu+djzJvG2desZmdL6Mx4ai9YqMpNr8YynpQ9IQWxSnST/AKSZpC0aswHEgSQb+/wkHifSMhHb8/FMcdIcmovUTi4HGMRxE9sTxHlJOAkdn4pVcAsFDaEk2A8TLTtLGUHFILiaJ7NMrXqWufCZ9FSXVMyrGtl62liMO5psMRQ7qKrKXFwR8Z54ivQdUXtcOCvE9pfN4ykRE4iTzZHBGvbK3iwiU6dNq9K6Cxs9xPZ95sDcXr0uOpBuZkmK+T5RuZmzReGxVN5sFawr0TfjmbT3SsbYTZtW5WpQpt1RrA+YlDnSoLpsangaWr1KFRuRY3A8hLJ/1yh+8ozKqPpL5xy/EyQf/9k="
      />
      <OnlineContact
        contactName="Michelle Obana"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Susana Gimenez"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Mauricio Macri"
        contactAvatar="https://i.pinimg.com/originals/05/7e/92/057e920e75c544e5a6afad166814e745.png"
      />
      <OnlineContact
        contactName="Maximo Kirchner"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNU5u9_DBtF-5-fZomw0M8uwjPKDn_erFgG3xO2mqZMuyH1pYY_YPEHEcObWmuXDLhY8&usqp=CAU"
      />
      <OnlineContact
        contactName="Jair Bolsonaro"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwur7Iipc2vyPJYAvM_UnbDCIoUKm6tm1cMQ&usqp=CAU"
      />
      <OnlineContact
        contactName="David Beckham"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIdnlO6zf3Pz5YKAQLaOUM48JmrxJFIV_fA&usqp=CAU"
      />
      <OnlineContact
        contactName="Gavin Belson"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbpd5H3s2fheUgfBFMe3xErlP0Z3PRF-TbQ&usqp=CAU"
      />
      <OnlineContact
        contactName="Mick Jagger"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Maria Eugenia Vidal"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Gabriela Sabatini"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Dinesh Chugtai"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2GEYagDnWCkuszV4J8MFOY5ZUQCqsXVm5n9atTRnGkBnFmesahjZBbxNFmuFb550l_Y&usqp=CAU"
      />
      <OnlineContact
        contactName="Erlick Bachman"
        contactAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRAKaFWMtaZ1H_KqRZCFSEOZlkCgdKMCW_xBm9n2pK5pVOrZDf9YwPa-_W_aOifRPepA&usqp=CAU"
      />
      <OnlineContact
        contactName="Mirtha Legrand"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Gilfoyle Bertram"
        contactAvatar="https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"
      />
      <OnlineContact
        contactName="Lionel Messi"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Noel Gallager"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Lucha Aimar"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Elon Musk"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Mr Robot"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Nicky Jam"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Britney Spears"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Floyd Mayweather"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Justin Bieber"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Connor Mc Gregor"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Megan Fox"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Angelina Jolie"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Luis Miguel"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Ricky Martin"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Residente"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Zinedine Zidane"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Lebron James"
        contactAvatar=""
      />
      <OnlineContact
        contactName="Fergie"
        contactAvatar=""
      />
    </ChatContainer>
  )
}

export default Chat
