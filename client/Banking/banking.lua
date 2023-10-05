local QBCore = exports['qb-core']:GetCoreObject()

function openAccountScreen()
    QBCore.Functions.TriggerCallback('qb-banking:getBankingInformation', function(banking)
        if banking == nil then
            print('ERROR: Banking not found!')
            return
        end


        SendReactMessage('openBank', banking)
    end)
end
