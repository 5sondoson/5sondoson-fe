import { type PlayerDetailHeaderProps } from '../model/types'
import { PlayerDetailMobileHeader } from './PlayerDetailMobileHeader'
import { PlayerDetailDesktopHeader } from './PlayerDetailDesktopHeader'

export function PlayerDetailHeader({
  player,
  scrollProgress = 0,
}: PlayerDetailHeaderProps) {
  return (
    <div className="bg-surface sm:border-b sm:border-line/12">
      <PlayerDetailMobileHeader
        player={player}
        scrollProgress={scrollProgress}
      />
      <PlayerDetailDesktopHeader
        player={player}
        scrollProgress={scrollProgress}
      />
    </div>
  )
}
