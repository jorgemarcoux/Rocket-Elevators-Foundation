fee = 0
price = 0
totalElev = 0
elevCost = 0
feeCost = 0
totalCost = 0

def calc1(apart, floor)
    avg = (apart / floor).ceil
    elevInit = (avg / 6).ceil
    addCol = floor / 20
    timeCol = (addCol + 1).floor
    totalElev = timeCol * elevInit
end

def calc2(cages)
    totalElev = cages.ceil
end

def calc3(floor, base, occ)
    stories = floor / base
    totalOcc = occ * stories
    elevInit = (totalOcc / 1000).ceil
    elevCol = (stories / 20).ceil
    elevPerCol = (elevInit / elevCol).ceil
    totalElev = elevPerCol * elevCol
end

def calcPrice
    elevCost = totalElev * price
    feeCost = elevCost * fee
    totalCost = feeCost + elevCost
end

# selected product line
def prodSelec(prodLine)
    if prodLine == 1
        fee = 0.1
        price = 7565
    elsif prodLine == 2
        fee = 0.13
        price = 12345
    elsif prodLine == 3
        fee = 0.16
        price = 15400
    end
end

# type of building
def findCalc(type, apart, base, floor, occ, cages)
    if type == 1
        calc1(floor, apart)
    elsif type == 2
        calc2(cages)
    elsif type == 3 || type == 4
        calc3(floor, base, occ)
    end

    calcPrice()
end

def calculate(type, prodLine, floor = 0, apart = 0, cages = 0, base = 0, occ = 0)
    prodSelec(prodLine)
    findCalc(type, floor, apart, cages, base, occ)
end

puts totalCost, elevCost, feeCost, totalElev