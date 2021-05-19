#***************************************************************************
#
# ZSH CONFIGURATION
#
#****************************************************************************

#----------------------------------------------------------------
# PLUGINS
# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
#----------------------------------------------------------------

plugins=(
  bgnotify
  colored-man-pages
  fasd
  fzf
  git
  github
  gitignore
  docker
  zsh-syntax-highlighting
  zsh-autosuggestions
)

#----------------------------------------------------------------
# ALIASES
#
# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
#----------------------------------------------------------------

# Terminal colors and Icons
alias lc="colorls --sd -A"
alias ls='lsd'

# Weather
alias weather="curl wttr.in\?qF"
alias weatherd="curl v2.wttr.in/Bridgeport-Pennsylvania"
alias moon="curl wttr.in/Moon"

eval $(thefuck --alias)

export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
function gi() { curl -sLw n https://www.gitignore.io/api/$@ ;}

#----------------------------------------------------------------
# THEME
#----------------------------------------------------------------

# Theme: https://github.com/Powerlevel9k/powerlevel9k
POWERLEVEL9K_MODE='nerdfont-complete'
ZSH_THEME="powerlevel9k/powerlevel9k"

# Settings
POWERLEVEL9K_COMMAND_EXECUTION_TIME_BACKGROUND=black
POWERLEVEL9K_COMMAND_EXECUTION_TIME_FOREGROUND=blue
POWERLEVEL9K_COMMAND_EXECUTION_TIME_THRESHOLD=0
POWERLEVEL9K_CUSTOM_OS_ICON_BACKGROUND=black
POWERLEVEL9K_CUSTOM_OS_ICON_FOREGROUND=white
POWERLEVEL9K_CUSTOM_OS_ICON='echo   $(whoami) '
POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX='%F{red}╭─%F{black}'
POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX='%F{red}╰%f '
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
POWERLEVEL9K_RAM_BACKGROUND=magenta
POWERLEVEL9K_RAM_FOREROUND=white
POWERLEVEL9K_RPROMPT_ON_NEWLINE=true
POWERLEVEL9K_SHORTEN_DIR_LENGTH=2
POWERLEVEL9K_STATUS_OK_IN_NON_VERBOSE=true
POWERLEVEL9K_STATUS_VERBOSE=false
POWERLEVEL9K_STATUS_VERBOSE=false
POWERLEVEL9K_TIME_BACKGROUND=black
POWERLEVEL9K_TIME_FOREGROUND=white
POWERLEVEL9K_TIME_FORMAT=%D{%I:%M}
POWERLEVEL9K_VCS_CLEAN_BACKGROUND=green
POWERLEVEL9K_VCS_CLEAN_FOREGROUND=black
POWERLEVEL9K_VCS_COMMIT_ICON=' '
POWERLEVEL9K_VCS_INCOMING_CHANGES_ICON=↓
POWERLEVEL9K_VCS_MODIFIED_BACKGROUND=black
POWERLEVEL9K_VCS_MODIFIED_FOREGROUND=white
POWERLEVEL9K_VCS_OUTGOING_CHANGES_ICON=↑
POWERLEVEL9K_VCS_UNSTAGED_ICON=±
POWERLEVEL9K_VCS_UNTRACKED_BACKGROUND=yellow
POWERLEVEL9K_VCS_UNTRACKED_FOREGROUND=black
POWERLEVEL9K_VCS_UNTRACKED_ICON=●
POWERLEVEL9K=truncate_beginning

# Prompts
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(custom_os_icon ssh root_indicator dir dir_writable vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(command_execution_time status background_jobs time ram)

#----------------------------------------------------------------
# EXPORTS
#----------------------------------------------------------------

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="${HOME}/.oh-my-zsh"

# Text Editors
export VISUAL="subl -w"
export EDITOR="vi"

# Set fzf installation directory path
export FZF_BASE=/path/to/fzf/install/dir

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
[ -f "/Users/jt/.ghcup/env" ] && source "/Users/jt/.ghcup/env" # ghcup-env

#----------------------------------------------------------------
# ACTIONS ON NEW TERMINAL
#----------------------------------------------------------------

#neofetch
#eval "$(starship init zsh)"

# source oh-my-zsh config
source $ZSH/oh-my-zsh.sh
